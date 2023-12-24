import axios from 'axios';
import queryString from 'query-string';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const gForm = {
    "publicURL":"https://docs.google.com/forms/d/e/1FAIpQLScdrb5s_y9QAHTu9cZShI9vcwn2TP1vAYiUzxIKI-425Q8FIA/formResponse",
    "Name":"entry.797876457",
    "Email":"entry.295637097",
    "Phone":"entry.747973734",
    "Batch": "entry.337213622",
    "P1": "entry.1131215445",
    "P2": "entry.271320743",
    "P3": "entry.429453481",
    "Question": "entry.1567616829"
}


export default class ContactUs extends React.Component{

    state = {
        open : false
    }

    handleOpen = e =>{
        this.setState({open : true})
    }

    handleClose = ()=>{
        this.setState({open : false})
    }


    myRequest = (url) => {
        let response;
        try {
          response = axios.post(url,null,null)
        } catch (e) {
          response = e;
        }
        console.log(response)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        const data = {
            ...this.state
        }
        e.preventDefault()
        const formUrl = gForm.publicURL;
        const q = queryString.stringifyUrl({
            url: formUrl,
            query: data
        })
        this.myRequest(q)
        e.target.reset();
        //window.location.reload(false)
        this.handleOpen()
    }

    render() { 
        return (
            <>
                <div className="pt-20 mx-6 sm:mx-24 md:mx-32 lg:mx-40 text-gray-100">
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Box className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white w-3/4 sm:w-1/2 lg:w-1/4'>
                        <div className='backdrop-blur-md bg-black/[0.5] p-4 px-6 rounded-lg text-center '>
                            <h2 className='font-medium text-lg md:text-xl mb-2'>Thank You</h2>
                            <p className='mb-2'>
                                Thank you for registering.
                            </p>
                            <p className='mb-2'>Happy Learning 🚀🚀</p>
                            <Button className="font-bold" variant="text"  onClick={this.handleClose}>Close</Button>
                        </div>
                    </Box>
                </Modal>
                    <h1 className="text-2xl md:text-4xl font-medium mb-10 text-center">
                        Register
                    </h1>
                    <div className='lg:flex bg-black/[.4] backdrop-blur-md rounded-xl p-8 mb-24 text-sm md:text-base'>
                        <form id="contactForm" className="lg:w-3/5" onSubmit={this.handleSubmit}
                            >
                            <div className="flex flex-wrap md:px-3">
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex block font-medium mb-2" for="grid-first-name">
                                        Name <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <input onChange={this.handleChange} name={gForm.Name} className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" type="text" placeholder="Enter your name" required/>
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex font-medium mb-2" for="grid-first-name">
                                        Email <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <input onChange={this.handleChange} name={gForm.Email} className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" type="email" placeholder="Enter your email address" required/>
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex font-medium mb-2">
                                        Contact No. <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <input onChange={this.handleChange} name={gForm.Phone} className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" type="text" placeholder="Enter your contact number" required/>
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex block font-medium mb-2" htmlFor="preference">
                                        Batch <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <select
                                        onChange={this.handleChange}
                                        name={gForm.Batch}
                                        className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2"
                                        id="preference"
                                        required
                                    >
                                        <option value="">Select Batch</option>
                                        <option value="B. Tech 2023">B. Tech 2023</option>
                                        <option value="B. Tech 2022">B. Tech 2022</option>
                                        <option value="B. Tech 2021">B. Tech 2021</option>
                                        <option value="B. Tech 2020">B. Tech 2020</option>
                                        <option value="M. Tech 2023">M. Tech 2023</option>
                                        <option value="M. Tech 2022">M. Tech 2022</option>
                                        <option value="M.Sc. (IT/DS) 2023">M.Sc. (IT/DS) 2023</option>
                                        <option value="M.Sc. (IT/DS) 2022">M.Sc. (IT/DS) 2022</option>
                                        <option value="M.Des.">M.Des.</option>
                                        <option value="PhD">PhD</option>
                                        {/* <option value="C">Choice 3</option> */}
                                        
                                    </select>
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex block font-medium mb-2" htmlFor="preference">
                                        Preference 1 <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <select
                                        onChange={this.handleChange}
                                        name={gForm.P1}
                                        className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2"
                                        id="preference"
                                        required
                                    >
                                        <option value="">Select Preference 1</option>
                                        <option value="HTML-CSS-JS">HTML-CSS-JS</option>
                                        <option value="Python with GUI">Python with GUI</option>
                                        <option value="Systems Programming">Systems Programming</option>
                                        <option value="React JS">React JS</option>
                                        <option value="Node JS">Node JS</option>
                                        <option value="Django">Django</option>
                                        <option value="Data Science(Basics)">Data Science(Basics)</option>
                                        <option value="Data Science(Advanced)">Data Science(Advanced)</option>
                                        <option value="Flutter">Flutter</option>
                                        <option value="Deep Learning(Basics)">Deep Learning(Basics)</option>
                                        <option value="Deep Learning(Advanced)">Deep Learning(Advanced)</option>
                                        {/* <option value="C">Choice 3</option> */}
                                    </select>
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex block font-medium mb-2" htmlFor="preference">
                                        Preference 2 <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <select
                                        onChange={this.handleChange}
                                        name={gForm.P2}
                                        className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2"
                                        id="preference"
                                        required
                                    >
                                        <option value="">Select Preference 2</option>
                                        <option value="HTML-CSS-JS">HTML-CSS-JS</option>
                                        <option value="Python with GUI">Python with GUI</option>
                                        <option value="Systems Programming">Systems Programming</option>
                                        <option value="React JS">React JS</option>
                                        <option value="Node JS">Node JS</option>
                                        <option value="Django">Django</option>
                                        <option value="Data Science(Basics)">Data Science(Basics)</option>
                                        <option value="Data Science(Advanced)">Data Science(Advanced)</option>
                                        <option value="Flutter">Flutter</option>
                                        <option value="Deep Learning(Basics)">Deep Learning(Basics)</option>
                                        <option value="Deep Learning(Advanced)">Deep Learning(Advanced)</option>
                                        {/* <option value="C">Choice 3</option> */}
                                    </select>
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex block font-medium mb-2" htmlFor="preference">
                                        Preference 3 <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <select
                                        onChange={this.handleChange}
                                        name={gForm.P3}
                                        className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2"
                                        id="preference"
                                        required
                                    >
                                        <option value="">Select Preference 3</option>
                                        <option value="HTML-CSS-JS">HTML-CSS-JS</option>
                                        <option value="Python with GUI">Python with GUI</option>
                                        <option value="Systems Programming">Systems Programming</option>
                                        <option value="React JS">React JS</option>
                                        <option value="Node JS">Node JS</option>
                                        <option value="Django">Django</option>
                                        <option value="Data Science(Basics)">Data Science(Basics)</option>
                                        <option value="Data Science(Advanced)">Data Science(Advanced)</option>
                                        <option value="Flutter">Flutter</option>
                                        <option value="Deep Learning(Basics)">Deep Learning(Basics)</option>
                                        <option value="Deep Learning(Advanced)">Deep Learning(Advanced)</option>
                                        {/* <option value="C">Choice 3</option> */}
                                    </select>
                                </div>
                                <div className="w-full mb-5">
                                    <label className="block font-medium mb-2 lg:mb-3">
                                        Questions?? <span className='text-red-500'>*</span>
                                    </label>
                                    <textarea onChange={this.handleChange} name={gForm.Question} rows="4" className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" placeholder="Drop us any question that you have regarding WoC :)" />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className='w-full mb-5 text-center lg:text-left lg:mb-0'>
                                    <input className="bg-green-600 hover:bg-green-800 font-medium px-4 py-2 rounded" type="submit" value="Submit"/>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
            </>
        )
    }
}