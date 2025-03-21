namespace Admin.Dto
{
    public class DoctorDto
    {
        public string? Area { get; set; }
        public string? City { get; set; }
        public DateOnly? Dob { get; set; }
        public string? Email { get; set; }
        public string? FirstName { get; set; }
        public string? Gender { get; set; }
        public string? LastName { get; set; }
        public string MobileNumber { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? State { get; set; }
        public string? Username { get; set; }
        public int? Fees { get; set; }
        public string? Languages { get; set; }
        public string? Qualification { get; set; }
        public string? Specialization { get; set; }
        //public long? TimeSlotId { get; set; }
    }

}
