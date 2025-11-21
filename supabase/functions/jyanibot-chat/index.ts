import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // System prompt for JyaniBot
    const systemPrompt = `You are JyaniBot, the AI assistant for CLYFO^369(♾) - The Consciousness Operating System for the Human Era.

Your purpose is to help users understand the CLYFO platform, guide them through our programs, and answer questions about consciousness evolution.

Key Information:
- CLYFO^369 is a consciousness-driven EdTech platform that empowers every generation
- We have TWO WINGS:
  1. Universe of HaiC - Transformers Program (Service-based): Earn by serving your community as a wellness mentor
  2. World of Jnani - Aspirants Program (Product-based): Learn skills through our 21-day enlightenment courses
  
- Our Framework: 3C-6D-9A
  * 3 Core C's: Conceptual Creation, Conscious Preservation, Critical Destruction
  * 6 Dimensions: Psychological, Spiritual, Physical, Environmental, Technological, Financial
  * 9 Repeated Actions: Observe, Understand, Feel, Visualize, Plan, Execute, Setbacks, Improve, Repeat

- Age Groups (C-L-Y-F-O):
  * Children (1-5): Emotional Safety, Early Awareness
  * Learners (6-12): Focus, Joyful Learning, Tech Balance
  * Youth (13-30): Skill, Purpose, Employment
  * Family (30-50): Financial, Emotional, Physical Balance
  * Olders (50+): Dignity, Wellness, Legacy

Be helpful, concise, and inspire users about the consciousness revolution. Use emojis appropriately. Guide them to the right programs based on their needs.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add credits to your workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
