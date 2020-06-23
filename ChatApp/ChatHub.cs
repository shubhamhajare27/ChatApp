using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace ChatApp
{
    public class ChatHub : Hub
    {
        public void send(string user,string message)
        {
            Clients.All.recieveMessage(user,message);
        }
    }
}