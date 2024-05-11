import React,{useState} from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        contactNo: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    

  return (
   <section className='py-20 max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto container flex flex-col xl:flex-row space-y-20 xl:space-y-0 items-start justify-between'>

    {/* left section */}
    <div className='w-full xl:flex-1'>
        <h3 className='text-6xl xl:text-[100px] xl:leading-[100px] text-[#D6D6D6] font-bold '>LET'S <br /> CONNECT</h3>
        <p className='text-4xl xl:text-[55px] xl:leading-[60px] text-primary font-bold mt-2 '>Design in India, <br /> for the world !</p>

    </div>


     {/* right section */}
     <div className='w-full xl:flex-1'>

     <form className=" xl:max-w-lg mx-auto " >

      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input
          className=" border-b-2 border-secondary rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none "
         
          type="text"
         
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2" htmlFor="companyName">Company Name</label>
        <input
          className=" border-b-2 border-secondary rounded w-full py-2 px-3 text-primary leading-tight  focus:outline-none "
       
          type="text"
       
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input
          className=" border-b-2 border-secondary rounded w-full py-2 px-3 text-primary leading-tight  focus:outline-none  "
       
          type="email"
      
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2" htmlFor="contactNo">Contact No</label>
        <input
          className=" border-b-2 border-secondary rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none  "
        
          type="tel"
     
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-primary text-sm font-bold mb-2" htmlFor="message">Message</label>
        <textarea
           className=" border-b-2 border-secondary rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none  "
     
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center justify-between mt-8">
        <button
          className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:outline-none "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>



        
        </div>



   </section>
  )
}

export default Contact