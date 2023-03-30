import Giscus from "@giscus/react"

const Comment = () =>{
    return(
        <div className="border-t-[100px] border-transparent">
    <Giscus
    id="comments"
    repo="CREE1116/forgiscus"
    repoId="R_kgDOJQlcmA"
    category="General"
    categoryId="DIC_kwDOJQlcmM4CVatO"
    mapping="pathname"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme="light"
    lang="ko"
    loading="lazy"/>
    </div>
    );
}
export default Comment;