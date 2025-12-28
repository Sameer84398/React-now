import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'


const App = () => {
  
   const jobOpenings =[
  {
    "brandLogo": "https://logo.clearbit.com/google.com",
    "companyName": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$58/hr",
    "location": "Mountain View, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/amazon.com",
    "companyName": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$72/hr",
    "location": "Seattle, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/meta.com",
    "companyName": "Meta",
    "datePosted": "10 days ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$55/hr",
    "location": "Menlo Park, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/apple.com",
    "companyName": "Apple",
    "datePosted": "3 weeks ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$78/hr",
    "location": "Cupertino, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/microsoft.com",
    "companyName": "Microsoft",
    "datePosted": "8 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$70/hr",
    "location": "Redmond, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/netflix.com",
    "companyName": "Netflix",
    "datePosted": "6 days ago",
    "post": "Data Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$68/hr",
    "location": "Los Gatos, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/tesla.com",
    "companyName": "Tesla",
    "datePosted": "4 weeks ago",
    "post": "Machine Learning Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$82/hr",
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/nvidia.com",
    "companyName": "NVIDIA",
    "datePosted": "12 days ago",
    "post": "AI Research Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$90/hr",
    "location": "Santa Clara, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/oracle.com",
    "companyName": "Oracle",
    "datePosted": "1 week ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$60/hr",
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/adobe.com",
    "companyName": "Adobe",
    "datePosted": "9 days ago",
    "post": "Product Designer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$45/hr",
    "location": "San Jose, USA"
  }
]
 
 console.log(jobOpenings);

  return (
    <div className='parent'>
{jobOpenings.map(function(elem){
  return <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2}  brandLogo={elem.brandLogo} pay={elem.pay} datePosted={elem.datePosted}/>
})}

    
    </div>
  )
}

export default App
