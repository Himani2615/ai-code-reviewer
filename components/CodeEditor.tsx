"use client";

import Editor from "@monaco-editor/react";

type Props = {
    code:string;
    language:string;
};

export default function CodeEditor({ code, language,}:Props){

    return(
        <Editor height="60vh" theme="vs-dark" language={language} value={code} 
            options={{
                minimap:{
                    enabled:false,
                },
                fontSize:14,
                automaticLayout:true,
                readOnly:true,
            }}
        />
    );
}