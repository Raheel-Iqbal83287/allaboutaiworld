

export default function LLMs(){
    return(
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
         <div>
            
         <div className="p-2 max-w-sm bg-white rounded shadow-lg flex items-left space-x-2">
         <div className="shrink-0">
        </div>
        <div>
        <div className="text-xl font-medium text-black">Large Language Models</div>
        </div>
        </div>
           

            <table className="border-separate border-spacing-2">
 
    <tr>

    <td>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
      <a href="https://openai.com/chatgpt">
      <img className="rounded ring-2 ring-blue" width="420" src="data:image/png;base64,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" alt=""/>
      </a>
      </figure>
      <center><b>OpenAI ChatGPT</b></center>
      </td>

      <td>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
      <a href="https://gemini.google.com/app">
      <img className="rounded ring-2 ring-blue" width="520" src="data:image/jpeg;base64,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" alt=""/>
      </a>
      </figure>
      <center><b>Google Gemini</b></center>
      </td>

      <td>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
      <a href="https://copilot.microsoft.com/">
      <img className="rounded ring-2 ring-blue" width="370" src="data:image/jpeg;base64,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" alt=""/>
      </a>
      </figure>
      <center><b>Microsoft Copiolot</b></center>
      </td>

      <td>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
      <a href="https://claude.ai/">
      <img className="rounded ring-2 ring-blue" width="500" height="215" src="data:image/png;base64,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" alt=""/>
      </a>
      </figure>
      <center><b>Anthrpoic Claude</b></center>
      </td>
      
      <td>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
      <a href="https://huggingface.co/">
      <img className="rounded ring-2 ring-blue" width="270" src="data:image/png;base64,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" alt=""/>
      </a>
      </figure>
      <center><b>Hugging Face</b></center>
      </td>

    </tr>
  
</table>
            </div>
            </figure>
    
 )
}