using System;
using System.Collections.Generic;

namespace Admin.Models;

public partial class DoctorTimeTableHoliday
{
    public long DoctorTimeTableId { get; set; }

    public string? Holidays { get; set; }

    public virtual DoctorTimetableTbl DoctorTimeTable { get; set; } = null!;
}
