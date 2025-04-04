from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import schemas, models, database

router = APIRouter()

@router.post("/flowers/")
def add_flower(flower: schemas.FlowerCreate, db: Session = Depends(database.get_db)):
    new_flower = models.Flower(**flower.dict())
    db.add(new_flower)
    db.commit()
    db.refresh(new_flower)
    return new_flower

@router.get("/flowers/")
def list_flowers(db: Session = Depends(database.get_db)):
    return db.query(models.Flower).all()
