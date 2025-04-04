from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class FlowerCreate(BaseModel):
    name: str
    description: str
    price: float
    image_url: str
    rating: floatfrom pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class FlowerCreate(BaseModel):
    name: str
    description: str
    price: float
    image_url: str
    rating: float
