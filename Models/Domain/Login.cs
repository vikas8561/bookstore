namespace bookstore.API.Models.Domain
{
    public class Login
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
