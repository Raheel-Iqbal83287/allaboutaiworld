import Videos from "./Videos/page"
import TopStories from "./TopStories/page"
import LLMs from "./LLMs/page"
import PromptEngg  from "./PromptEngg/page";
import CourseS from "./Courses/page"
import Books from "./Books/page"
import NavBar from "./NavBar/page";

export default function Home() {
  return (
    <div>
                  
      <div>
        <Videos />
      </div>
      
      <div>
        <TopStories />
      </div>
      
      <div>
        <LLMs />
      </div>
      
      <div>
        <PromptEngg />
      </div>

      <div>
        <CourseS />
      </div>

      <div>
        <Books />
      </div>

      <div>

      </div>
      <div>

      </div>
    </div>
  );
}
