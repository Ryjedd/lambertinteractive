using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharGravity : MonoBehaviour
{

    public PlanetGravity attractor;
    private Transform myTransform;

    // Use this for initialization
    void Start()
    {
       // GetComponent<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotation.x;
        GetComponent<Rigidbody>().useGravity = false;
        myTransform = transform;
    }

    // Update is called once per frame
    void Update()
    {
        attractor.Attract(myTransform);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (attractor != other.GetComponent<PlanetGravity>())
        {
            attractor = other.GetComponent<PlanetGravity>();
        }
    }
}
