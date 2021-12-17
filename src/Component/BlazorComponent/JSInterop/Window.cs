﻿using BlazorComponent.Web;
using Microsoft.JSInterop;
using OneOf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BlazorComponent
{
    public class Window
    {
        public Window()
        {
        }

        public Window(Document document)
        {
            Document = document;
        }

        [JsonPropertyName("innerHeight")]
        public double InnerHeight { get; set; }

        [JsonPropertyName("innerWidth")]
        public double InnerWidth { get; set; }

        [JsonPropertyName("pageXOffset")]
        public double PageXOffset { get; set; }

        [JsonPropertyName("pageYOffset")]
        public double PageYOffset { get; set; }

        public bool IsTop { get; set; }

        public bool IsBottom { get; set; }

        public Document Document { get; }

        internal IJSRuntime JS => Document.JS;

        public async Task AddEventListenerAsync(string type, Func<Task> listener, OneOf<EventListenerOptions, bool> options)
        {
            await JS.InvokeVoidAsync(JsInteropConstants.AddHtmlElementEventListener, "window", type, DotNetObjectReference.Create(new Invoker<object>((p) =>
            {
                listener?.Invoke();
            })), options.Value);
        }
    }
}
