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
    /// Номенклатура.
    /// </summary>
    // *** Start programmer edit section *** (Номенклатура CustomAttributes)

    // *** End programmer edit section *** (Номенклатура CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НоменклатураE", new string[] {
            "Номенклатура as \'Номенклатура\'",
            "ЕдиницыИзмер as \'Единицы измерения\'",
            "ЕдиницыИзмер.ЕдиницаИзмер as \'Единица измерения\'",
            "Контрагенты as \'Контрагенты\'",
            "Контрагенты.Контрагент as \'Контрагент\'"}, Hidden=new string[] {
            "ЕдиницыИзмер.ЕдиницаИзмер",
            "Контрагенты.Контрагент"})]
    [MasterViewDefineAttribute("НоменклатураE", "ЕдиницыИзмер", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ЕдиницаИзмер")]
    [MasterViewDefineAttribute("НоменклатураE", "Контрагенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Контрагент")]
    [View("НоменклатураL", new string[] {
            "Номенклатура as \'Номенклатура\'",
            "ЕдиницыИзмер.ЕдиницаИзмер as \'Единица измер\'",
            "Контрагенты.Контрагент as \'Контрагент\'"})]
    public class Номенклатура : ICSSoft.STORMNET.DataObject
    {
        
        private string fНоменклатура;
        
        private IIS.Itogovaya_peredelanaya.ЕдиницыИзмер fЕдиницыИзмер;
        
        private IIS.Itogovaya_peredelanaya.Контрагенты fКонтрагенты;
        
        // *** Start programmer edit section *** (Номенклатура CustomMembers)

        // *** End programmer edit section *** (Номенклатура CustomMembers)

        
        /// <summary>
        /// Номенклатура.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.Номенклатура CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.Номенклатура CustomAttributes)
        [StrLen(255)]
        public virtual string Номенклатура
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Get start)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Get start)
                string result = this.fНоменклатура;
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Get end)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Set start)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Set start)
                this.fНоменклатура = value;
                // *** Start programmer edit section *** (Номенклатура.Номенклатура Set end)

                // *** End programmer edit section *** (Номенклатура.Номенклатура Set end)
            }
        }
        
        /// <summary>
        /// Номенклатура.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ЕдиницыИзмер CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ЕдиницыИзмер CustomAttributes)
        [PropertyStorage(new string[] {
                "ЕдиницыИзмер"})]
        [NotNull()]
        public virtual IIS.Itogovaya_peredelanaya.ЕдиницыИзмер ЕдиницыИзмер
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ЕдиницыИзмер Get start)

                // *** End programmer edit section *** (Номенклатура.ЕдиницыИзмер Get start)
                IIS.Itogovaya_peredelanaya.ЕдиницыИзмер result = this.fЕдиницыИзмер;
                // *** Start programmer edit section *** (Номенклатура.ЕдиницыИзмер Get end)

                // *** End programmer edit section *** (Номенклатура.ЕдиницыИзмер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ЕдиницыИзмер Set start)

                // *** End programmer edit section *** (Номенклатура.ЕдиницыИзмер Set start)
                this.fЕдиницыИзмер = value;
                // *** Start programmer edit section *** (Номенклатура.ЕдиницыИзмер Set end)

                // *** End programmer edit section *** (Номенклатура.ЕдиницыИзмер Set end)
            }
        }
        
        /// <summary>
        /// Номенклатура.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.Контрагенты CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.Контрагенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Контрагенты"})]
        [NotNull()]
        public virtual IIS.Itogovaya_peredelanaya.Контрагенты Контрагенты
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.Контрагенты Get start)

                // *** End programmer edit section *** (Номенклатура.Контрагенты Get start)
                IIS.Itogovaya_peredelanaya.Контрагенты result = this.fКонтрагенты;
                // *** Start programmer edit section *** (Номенклатура.Контрагенты Get end)

                // *** End programmer edit section *** (Номенклатура.Контрагенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.Контрагенты Set start)

                // *** End programmer edit section *** (Номенклатура.Контрагенты Set start)
                this.fКонтрагенты = value;
                // *** Start programmer edit section *** (Номенклатура.Контрагенты Set end)

                // *** End programmer edit section *** (Номенклатура.Контрагенты Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НоменклатураE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НоменклатураE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НоменклатураE", typeof(IIS.Itogovaya_peredelanaya.Номенклатура));
                }
            }
            
            /// <summary>
            /// "НоменклатураL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НоменклатураL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НоменклатураL", typeof(IIS.Itogovaya_peredelanaya.Номенклатура));
                }
            }
        }
    }
}
