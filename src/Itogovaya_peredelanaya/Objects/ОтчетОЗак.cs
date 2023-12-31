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
    /// Отчет о зак.
    /// </summary>
    // *** Start programmer edit section *** (ОтчетОЗак CustomAttributes)

    // *** End programmer edit section *** (ОтчетОЗак CustomAttributes)
    [AutoAltered()]
    [Caption("Отчет о закупках")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтчетОЗакE", new string[] {
            "Номер as \'Номер\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Менеджер as \'Ответственный\'",
            "Менеджер.Сотрудники.ФИО as \'Ответственный\'",
            "Организации as \'Организации\'",
            "Организации.Организация as \'Организация\'",
            "Склады as \'Склады\'",
            "Склады.Склад as \'Склад\'",
            "Контрагенты as \'Контрагенты\'",
            "Контрагенты.Контрагент as \'Контрагент\'",
            "СостОтгрузки as \'Сост отгрузки\'",
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "СуммаДокумента as \'Сумма документа\'"}, Hidden=new string[] {
            "Организации.Организация",
            "Склады.Склад",
            "Контрагенты.Контрагент"})]
    [AssociatedDetailViewAttribute("ОтчетОЗакE", "ТЧЗаказ", "ТЧЗаказE", true, "", "Заказ", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ОтчетОЗакE", "Менеджер", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [MasterViewDefineAttribute("ОтчетОЗакE", "Организации", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Организация")]
    [MasterViewDefineAttribute("ОтчетОЗакE", "Склады", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Склад")]
    [MasterViewDefineAttribute("ОтчетОЗакE", "Контрагенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Контрагент")]
    [View("ОтчетОЗакL", new string[] {
            "Номер as \'Номер\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "СостОтгрузки as \'Сост отгрузки\'",
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "СуммаДокумента as \'Сумма документа\'",
            "Организации.Организация as \'Организация\'",
            "Склады.Склад as \'Склад\'",
            "Контрагенты.Контрагент as \'Контрагент\'"})]
    public class ОтчетОЗак : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private System.DateTime fДатаНачала = System.DateTime.Now;
        
        private System.DateTime fДатаОкончания;
        
        private IIS.Itogovaya_peredelanaya.СостОтгрузки fСостОтгрузки;
        
        private IIS.Itogovaya_peredelanaya.СостОплаты fСостояниеОплаты;
        
        private bool fСуммаВклНДС;
        
        private int fСуммаДокумента;
        
        private IIS.Itogovaya_peredelanaya.Менеджер fМенеджер;
        
        private IIS.Itogovaya_peredelanaya.Организации fОрганизации;
        
        private IIS.Itogovaya_peredelanaya.Склады fСклады;
        
        private IIS.Itogovaya_peredelanaya.Контрагенты fКонтрагенты;
        
        private IIS.Itogovaya_peredelanaya.DetailArrayOfТЧЗаказ fТЧЗаказ;
        
        // *** Start programmer edit section *** (ОтчетОЗак CustomMembers)

        // *** End programmer edit section *** (ОтчетОЗак CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Get start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Get end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Set start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Set end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания CustomAttributes)
        public virtual System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Get start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Get start)
                System.DateTime result = this.fДатаОкончания;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Get end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Set start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Set start)
                this.fДатаОкончания = value;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Set end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.Номер CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Get start)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Get end)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Set start)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Set end)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Set end)
            }
        }
        
        /// <summary>
        /// СостОтгрузки.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки CustomAttributes)
        public virtual IIS.Itogovaya_peredelanaya.СостОтгрузки СостОтгрузки
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Get start)
                IIS.Itogovaya_peredelanaya.СостОтгрузки result = this.fСостОтгрузки;
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Set start)
                this.fСостОтгрузки = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Set end)
            }
        }
        
        /// <summary>
        /// СостояниеОплаты.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты CustomAttributes)
        public virtual IIS.Itogovaya_peredelanaya.СостОплаты СостояниеОплаты
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get start)
                IIS.Itogovaya_peredelanaya.СостОплаты result = this.fСостояниеОплаты;
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set start)
                this.fСостояниеОплаты = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set end)
            }
        }
        
        /// <summary>
        /// СуммаВклНДС.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС CustomAttributes)
        public virtual bool СуммаВклНДС
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get start)
                bool result = this.fСуммаВклНДС;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set start)
                this.fСуммаВклНДС = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set end)
            }
        }
        
        /// <summary>
        /// СуммаДокумента.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента CustomAttributes)
        public virtual int СуммаДокумента
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Get start)
                int result = this.fСуммаДокумента;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Set start)
                this.fСуммаДокумента = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Set end)
            }
        }
        
        /// <summary>
        /// Отчет о зак.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.Контрагенты CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.Контрагенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Контрагенты"})]
        [NotNull()]
        public virtual IIS.Itogovaya_peredelanaya.Контрагенты Контрагенты
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Контрагенты Get start)

                // *** End programmer edit section *** (ОтчетОЗак.Контрагенты Get start)
                IIS.Itogovaya_peredelanaya.Контрагенты result = this.fКонтрагенты;
                // *** Start programmer edit section *** (ОтчетОЗак.Контрагенты Get end)

                // *** End programmer edit section *** (ОтчетОЗак.Контрагенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Контрагенты Set start)

                // *** End programmer edit section *** (ОтчетОЗак.Контрагенты Set start)
                this.fКонтрагенты = value;
                // *** Start programmer edit section *** (ОтчетОЗак.Контрагенты Set end)

                // *** End programmer edit section *** (ОтчетОЗак.Контрагенты Set end)
            }
        }
        
        /// <summary>
        /// Отчет о зак.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.Менеджер CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.Менеджер CustomAttributes)
        [PropertyStorage(new string[] {
                "Менеджер"})]
        [NotNull()]
        public virtual IIS.Itogovaya_peredelanaya.Менеджер Менеджер
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Менеджер Get start)

                // *** End programmer edit section *** (ОтчетОЗак.Менеджер Get start)
                IIS.Itogovaya_peredelanaya.Менеджер result = this.fМенеджер;
                // *** Start programmer edit section *** (ОтчетОЗак.Менеджер Get end)

                // *** End programmer edit section *** (ОтчетОЗак.Менеджер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Менеджер Set start)

                // *** End programmer edit section *** (ОтчетОЗак.Менеджер Set start)
                this.fМенеджер = value;
                // *** Start programmer edit section *** (ОтчетОЗак.Менеджер Set end)

                // *** End programmer edit section *** (ОтчетОЗак.Менеджер Set end)
            }
        }
        
        /// <summary>
        /// Отчет о зак.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.Организации CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.Организации CustomAttributes)
        [PropertyStorage(new string[] {
                "Организации"})]
        [NotNull()]
        public virtual IIS.Itogovaya_peredelanaya.Организации Организации
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Организации Get start)

                // *** End programmer edit section *** (ОтчетОЗак.Организации Get start)
                IIS.Itogovaya_peredelanaya.Организации result = this.fОрганизации;
                // *** Start programmer edit section *** (ОтчетОЗак.Организации Get end)

                // *** End programmer edit section *** (ОтчетОЗак.Организации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Организации Set start)

                // *** End programmer edit section *** (ОтчетОЗак.Организации Set start)
                this.fОрганизации = value;
                // *** Start programmer edit section *** (ОтчетОЗак.Организации Set end)

                // *** End programmer edit section *** (ОтчетОЗак.Организации Set end)
            }
        }
        
        /// <summary>
        /// Отчет о зак.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.Склады CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.Склады CustomAttributes)
        [PropertyStorage(new string[] {
                "Склады"})]
        [NotNull()]
        public virtual IIS.Itogovaya_peredelanaya.Склады Склады
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Склады Get start)

                // *** End programmer edit section *** (ОтчетОЗак.Склады Get start)
                IIS.Itogovaya_peredelanaya.Склады result = this.fСклады;
                // *** Start programmer edit section *** (ОтчетОЗак.Склады Get end)

                // *** End programmer edit section *** (ОтчетОЗак.Склады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Склады Set start)

                // *** End programmer edit section *** (ОтчетОЗак.Склады Set start)
                this.fСклады = value;
                // *** Start programmer edit section *** (ОтчетОЗак.Склады Set end)

                // *** End programmer edit section *** (ОтчетОЗак.Склады Set end)
            }
        }
        
        /// <summary>
        /// Отчет о зак.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.ТЧЗаказ CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.ТЧЗаказ CustomAttributes)
        public virtual IIS.Itogovaya_peredelanaya.DetailArrayOfТЧЗаказ ТЧЗаказ
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ТЧЗаказ Get start)

                // *** End programmer edit section *** (ОтчетОЗак.ТЧЗаказ Get start)
                if ((this.fТЧЗаказ == null))
                {
                    this.fТЧЗаказ = new IIS.Itogovaya_peredelanaya.DetailArrayOfТЧЗаказ(this);
                }
                IIS.Itogovaya_peredelanaya.DetailArrayOfТЧЗаказ result = this.fТЧЗаказ;
                // *** Start programmer edit section *** (ОтчетОЗак.ТЧЗаказ Get end)

                // *** End programmer edit section *** (ОтчетОЗак.ТЧЗаказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ТЧЗаказ Set start)

                // *** End programmer edit section *** (ОтчетОЗак.ТЧЗаказ Set start)
                this.fТЧЗаказ = value;
                // *** Start programmer edit section *** (ОтчетОЗак.ТЧЗаказ Set end)

                // *** End programmer edit section *** (ОтчетОЗак.ТЧЗаказ Set end)
            }
        }
        
        // *** Start programmer edit section *** (ОтчетОЗак.Сформировать CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.Сформировать CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Сформировать()
        {
            // *** Start programmer edit section *** (ОтчетОЗак.Сформировать method implementation)

            return;
            // *** End programmer edit section *** (ОтчетОЗак.Сформировать method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтчетОЗакE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетОЗакE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетОЗакE", typeof(IIS.Itogovaya_peredelanaya.ОтчетОЗак));
                }
            }
            
            /// <summary>
            /// "ОтчетОЗакL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетОЗакL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетОЗакL", typeof(IIS.Itogovaya_peredelanaya.ОтчетОЗак));
                }
            }
        }
    }
}
