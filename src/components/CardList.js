import React, {useState} from "react";
import './CardListStyles.css'
import CstmCard from './Card'
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function CardList({content}) {
    const [cards, setCards] = useState(content);
    const [sortType, setSortType] = useState('id-asc');
    const [sorted, setSorted] = useState(true);
    const [pageSize, setPageSize] = useState(content.length/10);
    const [currentPage, setCurrentPage] = useState(1)

    const handleDelete = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    };

    const handleSortingTypeChange = (event) => {
        setSortType(event.target.value);
        setSorted(false);
    };

    const handleRefresh = () => {
        setCards([]);
        setCards(content);
        setSorted(false);
    };

    const handleNextPage = () => {
        if (10 === currentPage) {
            setCurrentPage(1);
        }
        else {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (1 === currentPage) {
            setCurrentPage(10);
        }
        else {
            setCurrentPage(currentPage - 1);
        }
    };

    const sortCards = () => {
      if (!sorted) {
          let sortedItems;

          if ('id-asc' === sortType) {
              sortedItems = [...cards].sort((a, b) => a.id - b.id)
          }
          if ('id-desc' === sortType) {
              sortedItems = [...cards].sort((a, b) => b.id - a.id)
          }
          if ('time-asc' === sortType) {
              sortedItems = [...cards].sort((a, b) => a.timestamp - b.timestamp)
          }
          if ('time-desc' === sortType) {
              sortedItems = [...cards].sort((a, b) => b.timestamp - a.timestamp)
          }
          if ('filesize-asc' === sortType) {
              sortedItems = [...cards].sort((a, b) => a.filesize - b.filesize)
          }
          if ('filesize-desc' === sortType) {
              sortedItems = [...cards].sort((a, b) => b.filesize - a.filesize)
          }
          if ('cat-asc' === sortType) {
              sortedItems = [...cards].sort((a, b) => a.category > b.category ? 1 : -1)
          }
          if ('cat-desc' === sortType) {
              sortedItems = [...cards].sort((a, b) => a.category > b.category ? -1 : 1)
          }

          setCards(sortedItems);
          setSorted(true);
      }
    };


    const getPageCards = () => {
        let pageCards = [];
        let end = (pageSize*currentPage > cards.length) ? cards.length : pageSize*currentPage;
        for (let i = pageSize*(currentPage - 1); i < end; i++)
            pageCards.push(
                <CstmCard
                  key={cards[i].id}
                  id={cards[i].id}
                  handleDelete={handleDelete}
                  image={cards[i].image}
                  filesize={cards[i].filesize}
                  timestamp={cards[i].timestamp}
                  category={cards[i].category}
                />
            );

        return pageCards;
    };

    sortCards();

    return <div>
        <div className={'card-list-header'}>
            <Button variant={'outlined'} className={'card-list-btn'} onClick={handleRefresh}>Refresh</Button>
            <div className={'card-list-radio-group'}>
                <FormControl >
                    <FormLabel>Sotring</FormLabel>
                    <RadioGroup
                      row
                      name="sorting-radio-buttons"
                      value={sortType}
                      onChange={handleSortingTypeChange}
                    >
                        <FormControlLabel value="id-asc" control={<Radio />} label="ID Ascending" />
                        <FormControlLabel value="id-desc" control={<Radio />} label="ID Descending" />
                        <FormControlLabel value="time-asc" control={<Radio />} label="Time Ascending" />
                        <FormControlLabel value="time-desc" control={<Radio />} label="Time Descending" />
                        <FormControlLabel value="filesize-asc" control={<Radio />} label="Filesize Ascending" />
                        <FormControlLabel value="filesize-desc" control={<Radio />} label="Filesize Descending" />
                        <FormControlLabel value="cat-asc" control={<Radio />} label="Category Ascending" />
                        <FormControlLabel value="cat-desc" control={<Radio />} label="Category Descending" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
        <div className={'card-list-page-container'}>
            <div className={'page-nav-block'}>
                <IconButton variant={'outlined'} onClick={handlePrevPage}><NavigateBeforeIcon/></IconButton>
                <Typography>{currentPage}</Typography>
                <IconButton variant={'outlined'} onClick={handleNextPage}><NavigateNextIcon/></IconButton>
            </div>
            <div className={'card-list'}>
                {getPageCards()}
            </div>
            <div className={'page-nav-block'}>
                <IconButton variant={'outlined'} onClick={handlePrevPage}><NavigateBeforeIcon/></IconButton>
                <Typography>{currentPage}</Typography>
                <IconButton variant={'outlined'} onClick={handleNextPage}><NavigateNextIcon/></IconButton>
            </div>
        </div>
    </div>;
}

export default CardList;