from django.db import models

class Trainer(models.Model):
    TrainerId = models.IntegerField(primary_key=True)
    TrainerName = models.CharField(max_length=40)
    TrainerSal = models.IntegerField()
