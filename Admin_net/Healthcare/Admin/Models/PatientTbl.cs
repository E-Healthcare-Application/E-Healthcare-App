using System;
using System.Collections.Generic;

namespace Admin.Models;

public partial class PatientTbl
{
    public long Id { get; set; }

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

    public string? BloodGroup { get; set; }

    public virtual ICollection<AppointmentTbl> AppointmentTbls { get; set; } = new List<AppointmentTbl>();
}
