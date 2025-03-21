using Admin.Dto;
using Admin.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


namespace Admin.Controllers
{
    [EnableCors]
    [Route("admin/[controller]")]
    [ApiController]
    public class Doctor : ControllerBase
    {
        EhealthcareContext context;
        public Doctor(EhealthcareContext ctx)
        {
            context = ctx;
        }

        [HttpPost("doctorSignUp")]
        public IActionResult SaveDoctor([FromBody] DoctorDto doctor)
        {
            if (doctor == null)
            {
                return BadRequest("Doctor data is null");
            }

            Console.WriteLine($"Doc DTO from controller: {doctor}");

            //var savedDoctor = _doctorService.SaveDoctor(doctor);
            var savedDoctor = context.DoctorTbls.Add(doctor);

            if (savedDoctor == null)
            {
                Console.WriteLine("BAD REQ IF BLOCK");
                return BadRequest("Error saving doctor.");
            }

            return CreatedAtAction(nameof(SaveDoctor), new { id = savedDoctor. }, savedDoctor);
        }




        // GET: api/<Admin>
        [HttpGet]
        public ActionResult<IEnumerable<DoctorDto>> Get()
        {
            //IEnumerable<DoctorTbl> doctors = context.DoctorTbls.ToList();
            //return context.DoctorTbls.ToList();
            //DoctorDto d= new DoctorDto();
           var doctorDtos= context.DoctorTbls.Select(doctor => new DoctorDto
            {

               FirstName= doctor.FirstName,
               LastName= doctor.LastName,
               Email=  doctor.Email,
               MobileNumber=  doctor.MobileNumber,
               Area=   doctor.Area,
               City=  doctor.City,
               Gender=  doctor.Gender,
               Dob= doctor.Dob,
               State=  doctor.State,
               Username= doctor.Username,
               Fees=  doctor.Fees,
               Languages= doctor.Languages,
               Qualification= doctor.Qualification,
               Specialization= doctor.Specialization,
            }).ToList();
            return doctorDtos;
        }

        // GET api/<Admin>/5
        [HttpGet("{id}")]
        public DoctorTbl Get(long id)
        {
            DoctorTbl doctor = context.DoctorTbls.Find(id);

            return doctor;
        }

        // POST api/<Admin>
        [HttpPost]
        public void Post([FromBody] DoctorDto addDoctorDto)
        {
            Console.WriteLine(addDoctorDto);
            DoctorTbl d = new DoctorTbl
            {
                Area = addDoctorDto.Area,
                City = addDoctorDto.City,
                Dob = addDoctorDto.Dob,
                Email = addDoctorDto.Email,
                FirstName = addDoctorDto.FirstName,
                Gender = addDoctorDto.Gender,
                LastName = addDoctorDto.LastName,
                MobileNumber = addDoctorDto.MobileNumber,
                Password = addDoctorDto.Password, 
                State = addDoctorDto.State,
                Username = addDoctorDto.Username,
                Fees = addDoctorDto.Fees,
                Languages = addDoctorDto.Languages,
                Qualification = addDoctorDto.Qualification,
                Specialization = addDoctorDto.Specialization,
            };
            context.DoctorTbls.Add(d);
            context.SaveChanges();
        }

        // PUT api/<Admin>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<Admin>/5
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            DoctorTbl? doctorToRemove = context.DoctorTbls.Find(id);
            if (doctorToRemove!=null)
            {
                context.DoctorTbls.Remove(doctorToRemove);
                context.SaveChanges();
            }
        }
    }
}
