using Microsoft.AspNetCore.Mvc;
using ClientPortal.Models.Members;

namespace ClientPortal.Controllers;

[ApiController]
[Route("[controller]")]
public sealed class MembersController(ILogger<MembersController> logger) : ControllerBase
{
    private readonly ILogger<MembersController> _logger = logger;

    [HttpPost("Signup")]
    public SignupViewModel Signup([FromBody]SignupInputModel model)
    {
        return new() 
        {
            Message = "Hello " + model.Name + "!!!"
        };
    }
}