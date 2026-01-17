import MobileProjectCard from './MobileProjectCard.jsx';
import { useCarouselContext } from '../context/CarouselContext.jsx';

const MobileProjectsCarousel = () => {
    const { 
        activeIndex, 
        projectCount, 
        clonesCount, 
        projectsData 
    } = useCarouselContext();

    const items = [];
    // Add end clones to the beginning
    for (let i = projectCount - clonesCount; i < projectCount; i++) {
        items.push(
            <MobileProjectCard 
                key={`clone-start-${i}`} 
                data-index={i} 
                isActive={activeIndex === i}
                {...projectsData[i]}
            />
        );
    }
    // Add real items
    for (let i = 0; i < projectCount; i++) {
        items.push(
            <MobileProjectCard 
                key={i} 
                data-index={i} 
                isActive={activeIndex === i}
                {...projectsData[i]}
            />
        );
    }
    // Add start clones to the end
    for (let i = 0; i < clonesCount; i++) {
        items.push(
            <MobileProjectCard 
                key={`clone-end-${i}`} 
                data-index={i} 
                isActive={activeIndex === i}
                {...projectsData[i]}
            />
        );
    }
    return items;
};

export default MobileProjectsCarousel;
