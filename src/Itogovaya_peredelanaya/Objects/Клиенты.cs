﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Itogovaya_peredelanaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиенты.
    /// </summary>
    // *** Start programmer edit section *** (Клиенты CustomAttributes)

    // *** End programmer edit section *** (Клиенты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентыE", new string[] {
            "ФИО as \'ФИО\'"})]
    [View("КлиентыL", new string[] {
            "ФИО as \'ФИО\'"})]
    public class Клиенты : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        // *** Start programmer edit section *** (Клиенты CustomMembers)

        // *** End programmer edit section *** (Клиенты CustomMembers)

        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ФИО CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ФИО Get start)

                // *** End programmer edit section *** (Клиенты.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Клиенты.ФИО Get end)

                // *** End programmer edit section *** (Клиенты.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ФИО Set start)

                // *** End programmer edit section *** (Клиенты.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Клиенты.ФИО Set end)

                // *** End programmer edit section *** (Клиенты.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентыE", typeof(IIS.Itogovaya_peredelanaya.Клиенты));
                }
            }
            
            /// <summary>
            /// "КлиентыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентыL", typeof(IIS.Itogovaya_peredelanaya.Клиенты));
                }
            }
        }
    }
}
