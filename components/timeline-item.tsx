const TimelineItem = () => {
  return (
    <>
      <div className="relative center">
        <div className="timeline-description timeline-description-tl2 w-full copy copy-bold">
          <div>Inició la venta mayorista</div>
          <div>en menudencia <span className="text-gold-brand">BLANQUIROJA</span></div>
        </div>
        <div className="timeline-title timeline-title-tr w-full display text-gold-brand">
          Corporación Jordi
        </div>
        <picture className="relative">
          <img src={'/img/timeline-item-start.svg'} alt="timeline item" />
        </picture>
        <div className="absolute top-20 w-full center">
          <div>
            Icono
          </div>
          <h4 className="display text-gold-brand">
            2022
          </h4>
        </div>
      </div>
      <div className="relative center">
        <div className="timeline-description timeline-description-tl w-full copy copy-bold">
          <div>Inició la venta mayorista</div>
          <div>en menudencia <span className="text-gold-brand">BLANQUIROJA</span></div>
        </div>
        <picture className="relative">
          <img src={'/img/timeline-item.svg'} alt="timeline item" />
        </picture>
        <div className="absolute top-20 w-full center">
          <div>
            Icono
          </div>
          <h4 className="display text-gold-brand">
            2022
          </h4>
        </div>
      </div>
      <div className="relative center">
        <div className="timeline-description timeline-description-mr w-full copy copy-bold">
          <div>Inició la venta mayorista</div>
          <div>en menudencia <span className="text-gold-brand">BLANQUIROJA</span></div>
        </div>
        <picture className="relative">
          <img src={'/img/timeline-item.svg'} alt="timeline item" />
        </picture>
        <div className="absolute top-20 w-full center">
          <div>
            Icono
          </div>
          <h4 className="display text-gold-brand">
            2022
          </h4>
        </div>
      </div>
      <div className="relative center">
        <picture className="relative">
          <img src={'/img/timeline-item-end.svg'} alt="timeline item" />
        </picture>
      </div>
    </>
  )
}

export default TimelineItem