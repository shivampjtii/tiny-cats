import { recommendService } from "./cat.service.ts"
import { generateAiResponse } from "./gemini.service.ts";

export const aiRecommendService = async(kidsFriendly: boolean, appartmentFriendly: boolean)=>{
    const matchCatsFromDb = await recommendService(kidsFriendly, appartmentFriendly);
    const prompt = `
You are an expert feline consultant and professional cat breeder with extensive knowledge of all domestic cat breeds, their temperament, behavior, energy levels, grooming needs, and adaptability.

Compare the following two characteristics:

- Kids Friendly: ${kidsFriendly}
- Apartment Friendly: ${appartmentFriendly}

Your task is to:
1. Explain what each characteristic means.
2. Compare their advantages and disadvantages.
3. Describe what type of owner or family would benefit most from each.
4. Mention any trade-offs between them.
5. Give a balanced recommendation based on common real-world scenarios.

Format your response in Markdown using:
# Title
## Kids Friendly
## Apartment Friendly
## Key Differences
## Which Should You Prioritize?
## Final Recommendation

Keep the explanation concise, practical, and easy for a first-time cat owner to understand.
`;

    const aiResponse = await generateAiResponse(prompt);

    return aiResponse;
}