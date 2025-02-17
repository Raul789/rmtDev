import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import ResultsCount from "./ResultsCount";
import SortingConstrols from "./SortingControls";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import JobItemContent from "./JobItemContent";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if( !searchText ) return;
 
    const fetchData = async () => {
      setIsLoading(true);
     const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data={$searchText}`
       );
       const data = await response.json();
       setIsLoading(false);
       setJobItems(data.jobItems);
    }
 
    fetchData();
   }, [searchText]); 

  return <>
  <Background/>

  <Header>
    <HeaderTop>
      <Logo />
      <BookmarksButton/>
    </HeaderTop>
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          />
  </Header>

  <Container>
    <Sidebar>
      <SidebarTop>
          <ResultsCount/>
          <SortingConstrols/>

      </SidebarTop>

        <JobList jobItems={jobItems} isLoading={isLoading}/>
        <PaginationControls/>
    </Sidebar>
    <JobItemContent/>
  </Container>  

  <Footer/>
  </>;
}

export default App;
