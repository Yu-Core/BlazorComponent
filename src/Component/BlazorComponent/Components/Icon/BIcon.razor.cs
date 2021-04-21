﻿using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.AspNetCore.Components.RenderTree;
using Microsoft.AspNetCore.Components.Web;
using OneOf;

namespace BlazorComponent
{
    using StringNumber = OneOf<string, int>;

    public abstract partial class BIcon : BDomComponentBase
    {
        private string _icon;
        private IconTag _tag = IconTag.I;

        // TODO: 维护内置颜色列表
        [Parameter]
        public string Color { get; set; }

        [Parameter]
        public StringNumber? Size { get; set; }

        [Parameter]
        public EventCallback<MouseEventArgs> Click { get; set; }

        [Parameter]
        public RenderFragment ChildContent { get; set; }

        private async Task HandleOnClick(MouseEventArgs args)
        {
            if (Click.HasDelegate)
            {
                await Click.InvokeAsync(args);
            }
        }

        protected override void OnInitialized()
        {
            var builder = new RenderTreeBuilder();
            ChildContent(builder);

            // TODO: will be changed next release version!
            var frame = builder.GetFrames().Array.FirstOrDefault(u => u.FrameType == RenderTreeFrameType.Text || u.FrameType == RenderTreeFrameType.Markup);

            if (frame.FrameType != RenderTreeFrameType.None)
            {
                if (frame.TextContent.Contains("<svg"))
                {
                    // support SVG

                    _tag = IconTag.Span;
                    _icon = frame.TextContent;
                }
                else
                {
                    _tag = IconTag.I;
                    _icon = frame.TextContent.Trim();

                    // support Font Awesome 5
                    if (_icon.StartsWith("fas "))
                    {
                        CssBuilder.Add(_icon);

                        _icon = null;
                    }
                    // support Material Design Icons
                    else if (_icon.StartsWith("mdi-"))
                    {
                        CssBuilder.Add($"mdi {_icon}");

                        _icon = null;
                    }
                    // support Material Design
                    else
                    {
                        CssBuilder.Add("material-icons");
                    }
                }
            }

            base.OnInitialized();
        }
    }
}