using System;
using System.Collections.Generic;

namespace Admin.Models;

public partial class DoctorTimetableTbl
{
    public long Id { get; set; }

    public TimeOnly? BreakTime { get; set; }

    public DateOnly? EndDate { get; set; }

    public TimeOnly? EndTime { get; set; }

    public int SlotDuration { get; set; }

    public DateOnly? StartDate { get; set; }

    public TimeOnly? StartTime { get; set; }

    public virtual ICollection<DoctorTbl> DoctorTbls { get; set; } = new List<DoctorTbl>();

    public virtual ICollection<DoctorTimeTableAvailableSlot> DoctorTimeTableAvailableSlots { get; set; } = new List<DoctorTimeTableAvailableSlot>();
}
