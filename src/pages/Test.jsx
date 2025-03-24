import { useState } from "react";
import * as LucideIcons from "lucide-react";
import welfareData from "../data/utils.json";

// Structured data with categories

const Category = ({ category, index, toggleCategory, isExpanded }) => {
  const IconComponent = LucideIcons[category.icon];
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer ${
          isExpanded ? "bg-[#D93327]/20" : "bg-white/5 hover:bg-white/10"
        }`}
        onClick={() => toggleCategory(index)}
      >
        <div className="flex items-center gap-3">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#D93327]/10">
            {/* <Icon className="text-[#D93327]" size={24} /> */}
            {IconComponent && <IconComponent className="text-[#D93327]" size={24} />}
          </div>
          <h2 className="font-medium text-white">{category.name}</h2>
        </div>
        {isExpanded ? (
          <LucideIcons.ChevronUp className="h-5 w-5 text-[#D93327]" />
        ) : (
          <LucideIcons.ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0 p-4 bg-white/5">
          {category.items.map((item, idx) => (
            <CategoryItem key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryItem = ({ item }) => (
  <div className="py-2 px-2">
    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-[#D93327]" />
      <div>
        <span className="text-sm font-medium text-white">{item.name}</span>
        {item.description && <span className="text-xs text-gray-400 ml-2">({item.description})</span>}
      </div>
    </div>
  </div>
);

export default function Test() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10 text-white">
          สวัสดิการสำหรับพนักงาน <span className="text-[#D93327]">MASARU</span>
        </h1>

        <div className="space-y-4">
          {welfareData.categories.map((category, index) => {
            const isExpanded = expandedCategory === index;
            return <Category key={index} category={category} index={index} toggleCategory={toggleCategory} isExpanded={isExpanded} />;
          })}
        </div>
      </div>
    </section>
  );
}
