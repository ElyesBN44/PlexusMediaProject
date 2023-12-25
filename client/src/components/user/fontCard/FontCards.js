import React from 'react'

const FontCards = ({post,i}) => {
   const className=`overlap-group-${i}`
  console.log(i)
  return (
    <div className="overlap-group-wrapper">
    <div 
     className={className} 
    >
      <div className="box-search-wrapper">
        <img className="img-2" alt="Box search" src={post.image1} />
      </div>
      <p className="text-wrapper-13">{post.description}</p>
      <div className="text-wrapper-14">{post.title}</div>
    </div>
  </div> 
  )
}

export default FontCards









  {/* <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="empty-wallet-wrapper">
                <img className="img-2" alt="Empty wallet" src="/img/empty-wallet-1.svg" />
              </div>
              <p className="text-wrapper-13">Protocols apart from aengage models, pricing billing</p>
              <div className="text-wrapper-15">Financial Planning System</div>
            </div>
          </div>  */}
         {/* <div className="group-3">
            <div className="overlap-group-2">
              <div className="chart-square-wrapper">
                <img className="img-2" alt="Chart square" src="/img/chart-square-1.svg" />
              </div>
              <p className="text-wrapper-13">Protocols apart from aengage models, pricing billing</p>
              <div className="text-wrapper-16">Market Analysis Project</div>
            </div>
          </div>  */}
          {/* <div className="group-4">
            <div className="overlap-group-2">
              <div className="code-wrapper">
                <img className="img-2" alt="Code" src="/img/code-1-1.svg" />
              </div>
              <p className="text-wrapper-13">Communication protocols apart from engagement models</p>
              <div className="text-wrapper-17">Development Website and App</div>
            </div>
          </div> */}
          {/* <div className="group-1">
            <div className="overlap-group-2">
              <div className="code-wrapper">
                <img className="img-2" alt="Code" src="/img/code-1-1.svg" />
              </div>
              <p className="text-wrapper-13">Communication protocols apart from engagement models</p>
              <div className="text-wrapper-17">Development Website and App</div>
            </div>
          </div> */}
          {/* <div className="group">
            <div className="overlap-group-2">
              <div className="code-wrapper">
                <img className="img-2" alt="Code" src="/img/code-1-1.svg" />
              </div>
              <p className="text-wrapper-13">Communication protocols apart from engagement models</p>
              <div className="text-wrapper-17">Development Website and App</div>
            </div>
          </div> */}