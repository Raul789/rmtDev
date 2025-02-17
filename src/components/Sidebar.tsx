import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingConstrols from "./SortingControls";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount/>
        <SortingConstrols/>

      </div>

      <JobList/>
      
      <PaginationControls/>
    </div>
  );
}
