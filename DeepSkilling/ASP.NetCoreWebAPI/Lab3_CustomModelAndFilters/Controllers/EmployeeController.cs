using Lab3_CustomModelAndFilters.Filters;
using Lab3_CustomModelAndFilters.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lab3_CustomModelAndFilters.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id=1,
                    Name="John",
                    Salary=50000,
                    Permanent=true,
                    Department=new Department
                    {
                        Id=1,
                        Name="IT"
                    },
                    Skills=new List<Skill>
                    {
                        new Skill
                        {
                            Id=1,
                            Name="C#"
                        }
                    },
                    DateOfBirth=new DateTime(1998,5,10)
                }
            };
        }

        [HttpGet]

        [ProducesResponseType(StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status500InternalServerError)]

        public ActionResult<List<Employee>> Get()
        {
            return Ok(GetStandardEmployeeList());
        }

        [HttpPost]

        public IActionResult Post([FromBody] Employee employee)
        {
            return Ok(employee);
        }

        [HttpPut]

        public IActionResult Put([FromBody] Employee employee)
        {
            return Ok(employee);
        }
    }
}