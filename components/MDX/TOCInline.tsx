import React from 'react'

const CustomTOCInline = ({ toc }) => {
  console.log('-------------------------')
  console.log(toc)
  return (
    <div className="custom-toc">
      <ul>
        {toc.map((item, index) => {
          const cleanUrl = item.url.replace(/-2(?=\s*$)/, '')
          return (
            <li key={index}>
              <a href={cleanUrl}>{item.value}</a>
              {item.children && (
                <ul>
                  {item.children.map((subItem, subIndex) => {
                    const subCleanUrl = subItem.url.replace(/-2(?=\s*$)/, '')
                    return (
                      <li key={subIndex}>
                        <a href={subCleanUrl}>{subItem.value}</a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CustomTOCInline
