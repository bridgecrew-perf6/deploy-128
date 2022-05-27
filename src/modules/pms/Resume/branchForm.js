import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccordianData from './AccordianData'

const BranchForm = () => {
const dispatch = useDispatch();
  const [title,setTitle] = useState('')
  const [type,setType] = useState('') 
   const [company,setCompany] = useState('') 
   const [startdate,setStartdate] = useState('')
   const [enddate,setEnddate] = useState('')
   const [description,setDescription] = useState('')

  const addExperience =()=>{
const expData={
  title:title,
  type:type,
  company:company,
  start_date: startdate,
  end_date:enddate,
  description:description
}
dispatch({type:'EXPERIENCE',data:expData})
  }
  const stats = useSelector((state) => state.resume.experirnce);
  console.log('fff',stats);
  return (
    <div>
      {
         stats?
         <AccordianData user={stats} />
         :
              
    <>
    <div className='col pl-0' style={{display:"flex",justifyContent:"space-between"}}>
            <label for="inputEmail4" className='b-font'>ADD Experience</label>
            <span style={{color:"#000000",fontWeight:"600"}}>X</span>
      </div>
      <div className="form-row">
        <div class="form-group col-lg-12">
        <div style={{fontSize:"18px",fontWeight:"500"}}>Job Title</div>
          <input title='Foirst Name' onChange={(event)=>setTitle(event.target.value)} type="name" class="form-control b-field-height" id="inputEmail4" placeholder="Ex: UI/UX Designer" />
        </div>
        <div className="form-group col-lg-12">
        <div style={{fontSize:"18px",fontWeight:"500"}} >Employment Type</div>
          {/* <input type="password" className="form-control b-field-height" id="inputPassword4" placeholder="Last Name" /> */}
          <select onChange={(event)=>setType(event.target.value)} class="form-control b-field-height" id="inputEmail4">
              <option></option>
              <option value="First">First</option>
              <option value="Second">First</option>
          </select>
        </div>
        <div class="form-group col-lg-12">
        <div style={{fontSize:"18px",fontWeight:"500"}}>Company*</div>
          <input title='Foirst Name' onChange={(event)=>setCompany(event.target.value)} type="name" class="form-control b-field-height" id="inputEmail4" placeholder="Ex: Material Library" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4" className='b-font'>Start Date*</label>
          <input type="date" onChange={(event)=>setStartdate(event.target.value)} className="form-control b-field-height" id="inputEmail4" placeholder="fullname@gmail.com" />
        </div>

        <div className="col-md-6 mb-3">
          <label for="validationServerUsername" className='b-font'>End Date*</label>
          <div className="input-group">
            {/* <div>
              <input className="input-group-text b-region-field-phone" placeholder="+91" />
            </div> */}
            <input type="date" onChange={(event)=>setEnddate(event.target.value)} className="form-control b-field-height" placeholder="99999 99999" required />

          </div>
        </div>
       <div style={{display:"flex", alignItems:"center"}}>
       <input type="checkbox" style={{margin:"0 10px"}}/>
       <span>currently work here</span>
       </div>
      </div>


      <div class="form-group">
        <label for="inputAddress2" className='b-font'>Brief Description*</label>
        <input onChange={(event)=>setDescription(event.target.value)} type="text" class="form-control b-field-height" id="inputAddress2" placeholder="" />
      </div>

      {/* <div class="form-row">
        <div class="form-group col-md-3">
          <select id="inputState" class="form-control b-field-height">
            <option selected>Country</option>
            <option>india</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <select id="inputState" class="form-control b-field-height">
            <option selected>State</option>
            <option>Haryana</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <select id="inputState" class="form-control b-field-height">
            <option selected>City</option>
            <option>Faridabad</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <input type="text" class="form-control b-field-height" id="inputZip" placeholder="12345" />
        </div>
      </div> */}
<button onClick={addExperience}
style={{backgroundColor:"#000000", color:"#ffffff",border:"none",borderRadius:"5px",width:"250px",height:"50px",margin:"30px 0 20px 0"}}>Add</button>
    </>

      }
     

      
    
    </div>
  )
}

export default BranchForm