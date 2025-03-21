using System;
using System.Collections.Generic;

namespace Admin.Models;

public partial class DoctorTimeTableAvailableSlot
{
    public long DoctorTimeTableId { get; set; }

    public ulong? AvailableSlots { get; set; }

    public DateTime AvailableSlotsKey { get; set; }

    public virtual DoctorTimetableTbl DoctorTimeTable { get; set; } = null!;
}
