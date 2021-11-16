
import random

class Vertices:
    def __init__(self, value):
        self.value = value
        self.adjacent = {}

    def add_vertex_to(self, vertex, weight=0):
        self.adjacent[vertex] = weight

    def increment_edge(self, vertex):
        self.adjacent[vertex] = self.adjacent.get(vertex, 0) + 1

class Graph:
    def __init__(self):
        self.vertices = {}

    def get_vertex_values(self):
        return set(self.vertices.keys())
    

    def add_vertex(self, value):
        self.vertices[value] = Vertex(value)


    def get_vertex(self, value):
        if value not in self.vertices:
            self.add_vertex(value)
        return self.vertices[value]
    
    def get_next_word(self, current_vertex):
        se