import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

const Accordion = ({items}) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const renderedItems = items.map((el, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = () => {
      setExpandedIndex((current) => {
        if(current === index) {
          return -1;
        } else {
          return index;
        }
      })
    }

    const icon = <span className="text-xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return (
      <div key={el.id}>
        <div
          className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
          onClick={handleClick}>
          {el.label}
          {icon}
        </div>
        {isExpanded &&
          <div className="border-b p-5">
            {el.content}
          </div>
        }
      </div>
    )
  })
  return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion
