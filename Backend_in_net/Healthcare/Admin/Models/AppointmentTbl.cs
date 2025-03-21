using System;
using System.Collections.Generic;

namespace Admin.Models;

public partial class AppointmentTbl
{
    public long Id { get; set; }

    public DateTime? AppointmentTime { get; set; }

    public string? AppointmentType { get; set; }

    public long DoctorId { get; set; }

    public long PatientId { get; set; }

    public virtual DoctorTbl Doctor { get; set; } = null!;

    public virtual PatientTbl Patient { get; set; } = null!;
}
