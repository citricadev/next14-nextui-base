const TimelineItem = () => {
  return (
    <>
      <div className="relative center">
        <div className="timeline-description timeline-description-bl w-full copy copy-bold">
          <div>Inició la venta mayorista</div>
          <div>en menudencia <span className="text-gold-brand">BLANQUIROJA</span></div>
        </div>
        <picture className="relative">
          <img src={'/img/timeline-item-start.svg'} alt="timeline item" />
        </picture>
        <div className="absolute top-20 w-full center">
          <picture>
            <img src={'/img/icons/factory.svg'} alt="timeline item" />
          </picture>
          <h4 className="display text-gold-brand">
            1997
          </h4>
        </div>
        <div className="timeline-description timeline-description-tr w-full copy copy-bold">
          <div>Fundación de <span className="text-gold-brand">CORPORACIÓN JORDI</span></div>
        </div>
        <div className="timeline-title timeline-title-right timeline-title-size-3 w-full text-gold-dark">
          Corporación Jordi
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
          <picture>
            <img src={'/img/icons/premium.svg'} alt="timeline item" />
          </picture>
          <h4 className="display text-gold-brand">
            2000
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
          <picture>
            <img src={'/img/icons/shelves.svg'} alt="timeline item" />
          </picture>
          <h4 className="display text-gold-brand">
            2003
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