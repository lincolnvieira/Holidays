﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NationalHolidays.Application.Interfaces
{
    public interface INationalHolidayService
    {
        Task ResetOriginalDataHolidays();
    }
}