namespace bookstore.API.Models.DTO
{
    public class LoginDto
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
