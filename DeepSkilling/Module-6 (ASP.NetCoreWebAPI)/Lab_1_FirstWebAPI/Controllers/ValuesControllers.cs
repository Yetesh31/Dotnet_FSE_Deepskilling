using Microsoft.AspNetCore.Mvc;

namespace Lab1_FirstWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        // GET: api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[]
            {
                "Value1",
                "Value2",
                "Value3"
            };
        }

        // GET: api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return $"Value : {id}";
        }

        // POST: api/values
        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            return Ok($"Created : {value}");
        }

        // PUT: api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] string value)
        {
            return Ok($"Updated Value {id} : {value}");
        }

        // DELETE: api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok($"Deleted Value {id}");
        }
    }
}