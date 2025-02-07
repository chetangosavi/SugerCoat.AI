import Editor from "@monaco-editor/react"

const CodeEditor = () => {
    return(
        <div className="p-10">
            <Editor 
            height="400px" 
            defaultLanguage="javascript" 
            defaultValue="// Write your code here"
        />
        </div>
    )
}
export default CodeEditor;