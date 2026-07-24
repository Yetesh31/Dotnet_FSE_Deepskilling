using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Lab3_CustomModelAndFilters.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            File.AppendAllText("ExceptionLog.txt",
                $"{DateTime.Now} : {context.Exception.Message}{Environment.NewLine}");

            context.Result = new ObjectResult("Internal Server Error")
            {
                StatusCode = 500
            };
        }
    }
}