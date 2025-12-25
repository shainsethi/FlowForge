import { EmailNode } from "./emailNode"
import { FileUploadNode } from "./fileUploadNode"
import { InputNode} from "./inputNode"
import { LinkNode } from "./linkNode"
import { LLMNode } from "./llmNode"
import { OutputNode } from "./outputNode"
import { ResultNode } from "./resultNode"
import { StartNode } from "./startNode"
import { TextNode } from "./textNode"

export const Nodes = {
    llm: LLMNode,
    text: TextNode,
    link: LinkNode,
    customInput: InputNode,
    customOutput: OutputNode,
    fileUpload: FileUploadNode,
    start: StartNode,
    result: ResultNode,
    email: EmailNode,
}