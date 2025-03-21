using System;
using System.Collections.Generic;

namespace Admin.Models;

public partial class AdminTbl
{
    public long Id { get; set; }

    public string Email { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Password { get; set; } = null!;
}
