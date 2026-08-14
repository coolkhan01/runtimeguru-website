export interface LeadProfile {
  fullName: string;
  linkedinUrl: string;
  jobTitle: string;
  company: string;
  location: string;
  industry: string;
  companySize: string;
  followers: number | null;
  whyMatch: string;
  interestScore: number;
  recentPost: string | null;
  email: string | null;
}

async function groq(prompt: string, tokens = 4000): Promise<string> {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: tokens,
      temperature: 0.9,
    }),
  });
  if (!res.ok) throw new Error(`Groq ${res.status}: ${await res.text()}`);
  const data = await res.json() as { choices: { message: { content: string } }[] };
  return data.choices[0].message.content;
}

export async function generateLeads(filters: {
  country?: string;
  industry?: string;
  companySize?: string;
  jobTitle?: string;
  keywords?: string;
}): Promise<LeadProfile[]> {
  const country = filters.country || "United States";
  const industry = filters.industry || "Ecommerce, SaaS, Coaching, Agency, Real Estate";
  const jobTitle = filters.jobTitle || "Founder, CEO, Owner, Entrepreneur, Co-Founder";
  const keywords = filters.keywords || "YouTube, content creation, personal brand, passive income, online business";
  const size = filters.companySize || "1-50 employees";

  const prompt = `Generate 12 realistic B2B prospect profiles for a YouTube automation agency targeting business owners.

Context:
- Country: ${country}
- Industries: ${industry}
- Job Titles: ${jobTitle}
- Keywords/Signals: ${keywords}
- Company Size: ${size}

Rules for every profile:
1. fullName: Use real diverse American/international names (mix of ethnicities)
2. linkedinUrl: Format EXACTLY as: https://www.linkedin.com/in/firstname-lastname (lowercase, hyphen-separated, no numbers — e.g. https://www.linkedin.com/in/john-smith or https://www.linkedin.com/in/sarah-johnson-ceo)
3. jobTitle: Realistic title matching the filters
4. company: Use real-sounding company names (NOT Amazon/Google — use small/mid businesses like "Apex Digital Media", "GreenLeaf Commerce", "Nova Consulting Group")
5. location: Real city, State/Country (e.g. "Austin, Texas" or "London, UK")
6. industry: One of: Ecommerce, SaaS, Digital Marketing, Real Estate, Coaching, Consulting, Media, Education, Health & Wellness, Agency
7. companySize: One of: 1-10, 11-50, 51-200, 201-500, 500+
8. followers: Random between 800 and 25000
9. whyMatch: One specific sentence about why THIS person's business would benefit from YouTube automation
10. interestScore: 70-99 based on fit
11. recentPost: A realistic LinkedIn post snippet this person might write (1-2 sentences)
12. email: Format as firstname.lastname@companydomain.com (use .com domain matching company name)

Return ONLY a valid JSON array, no markdown, no explanation:
[{"fullName":"...","linkedinUrl":"...","jobTitle":"...","company":"...","location":"...","industry":"...","companySize":"...","followers":0,"whyMatch":"...","interestScore":0,"recentPost":"...","email":"..."}]`;

  const text = await groq(prompt);
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("No JSON in response");
  const leads = JSON.parse(jsonMatch[0]) as LeadProfile[];
  return leads.slice(0, 12);
}

export async function generateOutreachMessage(lead: {
  fullName: string;
  jobTitle: string;
  company: string;
  industry: string;
  whyMatch: string;
  recentPost?: string | null;
}): Promise<string> {
  return groq(`Write a personalized LinkedIn DM for Runtime Gurus (YouTube automation agency).

Target: ${lead.fullName}, ${lead.jobTitle} at ${lead.company} (${lead.industry})
Why they're a fit: ${lead.whyMatch}
${lead.recentPost ? `Their recent post: ${lead.recentPost}` : ""}

Write a 150-200 word connection message. Friendly, not salesy. Reference their specific role. Mention YouTube automation helps businesses like theirs build brand authority and attract clients passively. End with a soft CTA. Ready to send, no placeholders.`, 500);
}
