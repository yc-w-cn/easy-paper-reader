import { CreatorArea } from "../areas/CreatorArea"
import { AutoColumnContent } from "./AutoColumnContent"

export function CreatorWrapper() {
  return <AutoColumnContent content={<div className="mb-[50vh]"><CreatorArea /></div>} />
}
