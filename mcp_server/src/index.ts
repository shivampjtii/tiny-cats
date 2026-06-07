import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { recommendCatsTool } from "./tools/recommendCats.tools.ts";

// Create server instance
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

server.registerTool("recommend_cats", {
    title:"recommed_cats",
    description: "Recommend a best cat breed according to input.",
    inputSchema:{
        kidsFriendly: z.boolean(),
        appartmentFriendly: z.boolean()
    }
}, async ({kidsFriendly, appartmentFriendly})=>{
    const result = await recommendCatsTool(kidsFriendly, appartmentFriendly);

    return {
        content:[
            {
                type: "text",
                text: JSON.stringify(result)
            }
        ]
    }
})

const transporter = new StdioServerTransport();

await server.connect(transporter);

console.error("tiny cats mcp running...");