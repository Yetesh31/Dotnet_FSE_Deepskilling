using Lab2_SwaggerAndPostman.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lab2_SwaggerAndPostman.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    public class EmployeeController : ControllerBase
    {
        private static readonly List<Employee> employees = new()
        {
            new Employee
            {
                Id = 1,
                Name = "John",
                Department = "IT",
                Salary = 50000
            },
            new Employee
            {
                Id = 2,
                Name = "Alice",
                Department = "HR",
                Salary = 45000
            }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Post(Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }
    }
}