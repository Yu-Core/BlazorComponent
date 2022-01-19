﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlazorComponent
{
    public class PageTabItem
    {
        public PageTabItem(string name, string url)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            Url = url ?? throw new ArgumentNullException(nameof(url));
        }

        public PageTabItem(string name, string url, string icon)
            : this(name, url)
        {
            Icon = icon ?? throw new ArgumentNullException(nameof(icon));
        }

        public string Name { get; }

        public string Url { get; }

        public string Icon { get; }

        internal bool IsOpened { get; set; }

        internal DateTime OpenedTime { get; set; }
    }
}
